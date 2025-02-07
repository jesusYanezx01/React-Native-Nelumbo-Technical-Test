import { AreaResponse } from "./AreaResponse";
import { DepartmentResponse } from "./DepartmentResponse";
import { PriorityResponse } from "./PriorityResponse";
import { StatusResponse } from "./StatusResponse";
import { StoreResponse } from "./StoreResponse";
import { UserResponse } from "./UserResponse";

export interface FolioResponse {
  id: string;
  name: string | null;
  description: string;
  type: string;
  area: AreaResponse;
  createTime: string;
  department: DepartmentResponse;
  priority: PriorityResponse;
  store: StoreResponse;
  status: StatusResponse;
  createdByUser: UserResponse;
  userAttendingId: number;
}
