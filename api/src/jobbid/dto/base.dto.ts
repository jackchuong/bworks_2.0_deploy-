export class BaseJobBidDto {
  name: string;
  jobId: string;
  jobSeekerId: string;
  employerId: string;
  bidDate: Date;
  completeDate: Date;
  bidValue: number;
  isSelected: boolean;
  isSignedTx: boolean;
  isPaid: boolean;
  isCompleted: boolean;
  description: string;
}
