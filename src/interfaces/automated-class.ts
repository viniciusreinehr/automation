import { FillForm } from "../usecases/fill-form";

export interface AutomatedClass extends FillForm {
  test(name: string): boolean
}