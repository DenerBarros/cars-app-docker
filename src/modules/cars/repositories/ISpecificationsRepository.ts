import { Specification } from "../entities/Especification";


interface ICreateSpecificationDTO {
    name: string;
    description: string;    
}

interface ISpecificationsRepository {

    create({ description, name }: ICreateSpecificationDTO): void;
    findbyName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };