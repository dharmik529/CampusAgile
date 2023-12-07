import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { UserService } from 'src/user/user.service';
@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly userService: UserService,
  ) { }

  async getProjects(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<String> {
    // Check if the user with the given email exists
    const existingUser = await this.userService.getUserByEmail(createProjectDto.createdByUser);

    if (!existingUser) {
      throw new NotFoundException(`User with email ${createProjectDto.createdByUser} not found`);
    }

    // If user exists, proceed with creating the project
    const project = new Project();
    project.name = createProjectDto.name;
    project.description = createProjectDto.description;
    project.status = createProjectDto.status;
    project.priority = createProjectDto.priority;
    // Assign the email directly to createdByUser
    project.createdByUser = createProjectDto.createdByUser;

    // Save the project
    await this.projectRepository.save(project);

    return `The project was created successfully`;
  }

  async findAllProjects() {
    const projects = await this.projectRepository
      .createQueryBuilder('project')
      .select([
        'project.id',
        'project.name',
        'project.description',
        'project.status', // Include project status
        'project.priority', // Include project priority
        'createdByUser.id',
        'createdByUser.full_name',
      ])
      .leftJoin('project.createdByUser', 'createdByUser')
      .getRawMany();

    return projects;
  }

  async viewProject(id: number) {
    const project = await this.projectRepository
      .createQueryBuilder('project')
      .select([
        'project.id',
        'project.name',
        'project.description',
        'project.status', // Include project status
        'project.priority', // Include project priority
        'createdByUser.id',
        'createdByUser.full_name',
      ])
      .leftJoin('project.createdByUser', 'createdByUser')
      .where('project.id = :id', { id })
      .getRawOne();

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }

  async updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<String> {
    const project = await this.projectRepository.findOneBy({ id });

    if (!project) {
      throw new Error(`Project with ID ${id} not found.`);
    }

    if (updateProjectDto.name !== undefined) {
      project.name = updateProjectDto.name;
    }

    if (updateProjectDto.description !== undefined) {
      project.description = updateProjectDto.description;
    }

    if (updateProjectDto.status !== undefined) {
      project.status = updateProjectDto.status;
    }

    if (updateProjectDto.priority !== undefined) {
      project.priority = updateProjectDto.priority;
    }

    if (updateProjectDto.createdByUser !== undefined) {
      project.createdByUser = updateProjectDto.createdByUser;
    }

    await this.projectRepository.save(project);
    return `Project Updated Successfully`;
  }

  async remove(id: number): Promise<String> {
    const projectToRemove = await this.projectRepository.findOneBy({ id });

    if (!projectToRemove) {
      throw new Error('Project not found.');
    }

    await this.projectRepository.remove(projectToRemove);
    return `Project has been removed`;
  }
}