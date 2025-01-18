"use client";
import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (formData: any) => void;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon || '/placeholder-icon.png'} // Fallback image
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>
      <p className="text-sm text-gray-500">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label>{item.label}</label>
            {item.field === 'input' ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === 'textarea' ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}

        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
