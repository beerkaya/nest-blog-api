import { PartialType } from '@nestjs/mapped-types';
import { CreatePostMetaDto } from './create-post_meta.dto';

export class UpdatePostMetaDto extends PartialType(CreatePostMetaDto) {}
