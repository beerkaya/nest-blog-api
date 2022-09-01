import {
    registerDecorator,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    ValidationOptions
} from "class-validator";
import { AppModule } from "src/app.module";
import { EntityManager, Repository } from "typeorm";

@ValidatorConstraint({async: true})
export class UniqueConstraint implements ValidatorConstraintInterface {
    constructor() { }
    async validate(value: any, args: ValidationArguments) {
        const [entity] = args.constraints;
        const [property] = args.property.split('.');
        const repository = new Repository<typeof entity>(entity, new EntityManager(AppModule.dataSource));
        const count = (await repository.findBy({ [property]: value })).length;
        return count === 0;
    }
}

export function Unique(entity?: any, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions ?? { message: `The ${propertyName} is already exists.` },
            constraints: [entity],
            validator: UniqueConstraint
        });
    };
}