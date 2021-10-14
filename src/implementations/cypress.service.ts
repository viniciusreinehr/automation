import { FillForm } from '../usecases/fill-form'
import { AutomatedClass } from "../interfaces/automated-class";
import { ResponseCodes } from '../definitions/response-codes';

export default class CypressService implements AutomatedClass {
  withObject(formData: FillForm.Params | FillForm.Params[]): Promise<FillForm.Result> {
    const response = {
      success: true,
      code: ResponseCodes.SUCCESS,
      message: 'teste'
    }
    return new Promise(() => response)
  }

  test(name: string): boolean {
    return true
  }
}