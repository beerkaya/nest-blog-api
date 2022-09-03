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
export class ExistsConstraint implements ValidatorConstraintInterface {
    constructor() { }
    async validate(value: any, args: ValidationArguments) {
        const [entity] = args.constraints;
        const [property] = args.property.split('.');
        const repository = new Repository<typeof entity>(entity, new EntityManager(AppModule.dataSource));
        console.log(property, value);
        const count = (await repository.find()).filter(item => item.id === value).length;
        console.log(count);
        return count >= 1;
    }
}

export function Exists(entity?: any, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions ?? { message: `The ${propertyName} is not found.` },
            constraints: [entity],
            validator: ExistsConstraint
        });
    };
}