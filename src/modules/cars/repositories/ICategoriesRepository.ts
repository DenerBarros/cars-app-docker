import { Category } from "../entities/Category";

// DTO => Data Transfer Object

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findbyName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };