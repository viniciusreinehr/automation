import { ResponseCodes } from "../definitions/response-codes"

export interface FillForm {
  withObject: (formData: FillForm.Params | FillForm.Params[]) => Promise<FillForm.Result>
}

export namespace FillForm {
  export type Params = {
    type: string
    name: string
    value: string | number | File | Date
  }

  export type Result = {
    success: boolean
    code: ResponseCodes
    message: string
  }
}