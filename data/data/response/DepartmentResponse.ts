import { UserResponse } from "./UserResponse";

export interface DepartmentResponse {
  name: string | null;
  userManage: UserResponse;
}
