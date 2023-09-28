'use client';
import { uniswapIcon } from '@/assets/icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import Image from 'next/image';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
const FormSchema = z.object({
  option: z.string(),
});

const DropDown = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="option"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <span className="inline-flex items-center gap-2">
                        <Image src={uniswapIcon} alt="sdsdsd" />
                        <span className="block text-t-16 font-medium uppercase">
                          Uniswap V2
                        </span>
                      </span>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="v2">Uniswap V2</SelectItem>
                    <SelectItem value="v3">Uniswap V3</SelectItem>
                    <SelectItem value="v4">Uniswap V4</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default DropDown;
