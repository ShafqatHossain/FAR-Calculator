import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import * as z from "zod";

const useRHF = <TFieldValues extends FieldValues>({
  formSchema,
  defaultValues,
}: {
  formSchema: z.ZodType<TFieldValues, TFieldValues>;
  defaultValues: DefaultValues<TFieldValues>;
}) => {
  const form = useForm<TFieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return form;
};

export default useRHF;
