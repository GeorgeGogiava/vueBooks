// src/types/author.ts

// Basic Author structure (used in GET list, etc.)
export interface Author {
  id: number
  fullname: string
}

// DTO used when creating a new author
export interface AuthorCreateDto {
  fullname: string
}

// DTO used when updating an author
export interface AuthorUpdateDto {
  fullname: string
}

// Response from backend when inserting an author
export interface AuthorInsertResult {
  insertId: number
  message: string
}

// Response from backend when updating an author
export interface AuthorUpdateResponse {
  id: number
  affectedRows: number
  message: string
}

// Response from backend when deleting an author
export interface AuthorDeleteResponse {
  message: string
  affectedRows: number
}