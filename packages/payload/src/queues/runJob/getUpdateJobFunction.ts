import type { PayloadRequest } from '../../types/index.js'
import type { BaseJob } from '../config/workflowTypes.js'

export type UpdateJobFunction = (jobData: Partial<BaseJob>) => Promise<BaseJob>

export function getUpdateJobFunction(job: BaseJob, req: PayloadRequest): UpdateJobFunction {
  return async (jobData) => {
    const updatedJob = (await req.payload.update({
      id: job.id,
      collection: 'payload-jobs',
      data: jobData,
      depth: 0,
      req,
    })) as BaseJob

    // Update job object like this to modify the original object - that way, the changes will be reflected in the calling function
    for (const key in updatedJob) {
      job[key] = updatedJob[key]
    }

    return updatedJob
  }
}