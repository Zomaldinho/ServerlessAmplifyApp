/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSalary = /* GraphQL */ `
  mutation CreateSalary(
    $input: CreateSalaryInput!
    $condition: ModelSalaryConditionInput
  ) {
    createSalary(input: $input, condition: $condition) {
      id
      name
      position
      wage
      currency
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSalary = /* GraphQL */ `
  mutation UpdateSalary(
    $input: UpdateSalaryInput!
    $condition: ModelSalaryConditionInput
  ) {
    updateSalary(input: $input, condition: $condition) {
      id
      name
      position
      wage
      currency
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSalary = /* GraphQL */ `
  mutation DeleteSalary(
    $input: DeleteSalaryInput!
    $condition: ModelSalaryConditionInput
  ) {
    deleteSalary(input: $input, condition: $condition) {
      id
      name
      position
      wage
      currency
      createdAt
      updatedAt
      owner
    }
  }
`;
