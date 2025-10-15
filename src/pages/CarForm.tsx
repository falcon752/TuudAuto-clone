// src/pages/CarForm.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const carSchema = z.object({
  brand: z.string().min(1),
  model: z.string().min(1),
  year: z
    .number()
    .int()
    .min(1886, "Year looks wrong")
    .max(new Date().getFullYear() + 1),
  engine_type: z.string().min(1),
  transmission: z.enum(["Automatic", "Manual"]),
  body_type: z.string(),
  seats: z.number().int().min(1).max(16),
  doors: z.number().int().min(1).max(6),
  price: z.number().nonnegative(),
  is_new: z.boolean(),
  description: z.string().optional(),
  images: z.any().optional(),
  mileage: z.number().nonnegative(),
  color: z.string().optional(),
  fuel_economy: z.string().optional(),
  condition: z.string().optional(),
  features: z.string().optional(),
  specifications: z
    .object({
      performance: z.object({
        max_power: z.string().optional(),
        max_torque: z.string().optional(),
        acceleration: z.string().optional(),
        top_speed: z.string().optional(),
      }),
      dimensions: z.object({
        length: z.string().optional(),
        width: z.string().optional(),
        height: z.string().optional(),
        wheelbase: z.string().optional(),
        ground_clearance: z.string().optional(),
      }),
      capacity: z.object({
        fuel_tank: z.string().optional(),
        boot_space: z.string().optional(),
        seating_capacity: z.number().int().optional(),
      }),
      safety: z.array(z.string()).optional(),
    })
    .optional(),
  seller_info: z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().email().optional(),
    location: z.string().optional(),
    business_name: z.string().optional(),
    business_type: z.string().optional(),
  }),
  published: z.boolean().optional(),
  created_at: z.string().optional(),
});

type CarFormValues = z.infer<typeof carSchema>;

const defaultValues: Partial<CarFormValues> = {
  brand: "",
  model: "",
  year: new Date().getFullYear(),
  engine_type: "",
  transmission: "Automatic",
  body_type: "",
  seats: 4,
  doors: 4,
  price: 0,
  is_new: false,
  mileage: 0,
  color: "#000000",
  features: "",
  specifications: {
    performance: {},
    dimensions: {},
    capacity: {},
    safety: [],
  },
  seller_info: {
    name: "",
    phone: "",
    email: "",
    location: "",
    business_name: "",
    business_type: "",
  },
  published: false,
};

const CarForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<CarFormValues>({
    resolver: zodResolver(carSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const onSubmit = (data: CarFormValues) => {
    const featuresArray =
      typeof data.features === "string" && data.features.length > 0
        ? data.features
            .split(",")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];
    let files: File[] = [];
    if (data.images && (data.images as FileList).length) {
      // @ts-ignore
      files = Array.from(data.images as FileList);
    }
    const payload = {
      ...data,
      features: featuresArray,
      images: files.map((f) => f.name),
      _imagesFiles: files,
    };
    console.log("Car form submitted:", payload);
  };

  const isNew = watch("is_new");

  return (
    <div className="max-w-6xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-semibold mb-4">Create Car</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="brand" className="text-gray-800">Brand</Label>
              <Input id="brand" {...register("brand")} placeholder="Toyota" />
              {errors.brand && (
                <p className="text-rose-600 text-sm mt-1">{errors.brand.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="model" className="text-gray-800">Model</Label>
              <Input id="model" {...register("model")} placeholder="Corolla" />
              {errors.model && (
                <p className="text-rose-600 text-sm mt-1">{errors.model.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="year" className="text-gray-800">Year</Label>
              <Input
                id="year"
                type="number"
                {...register("year", { valueAsNumber: true })}
                placeholder="2024"
              />
              {errors.year && (
                <p className="text-rose-600 text-sm mt-1">{errors.year.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="engine_type" className="text-gray-800">Engine Type</Label>
              <Input id="engine_type" {...register("engine_type")} placeholder="2.0L I4" />
            </div>
            <div>
              <Label htmlFor="transmission" className="text-gray-800">Transmission</Label>
              <Controller
                control={control}
                name="transmission"
                render={({ field }) => (
                  <Select onValueChange={(v) => field.onChange(v)} value={field.value}>
                    <SelectTrigger aria-label="Transmission" className="w-full">
                      <SelectValue placeholder="Select transmission" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Automatic">Automatic</SelectItem>
                      <SelectItem value="Manual">Manual</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="body_type" className="text-gray-800">Body Type</Label>
              <Input id="body_type" {...register("body_type")} placeholder="Sedan" />
            </div>
            <div>
              <Label htmlFor="seats" className="text-gray-800">Seats</Label>
              <Input id="seats" type="number" {...register("seats", { valueAsNumber: true })} />
            </div>
            <div>
              <Label htmlFor="doors" className="text-gray-800">Doors</Label>
              <Input id="doors" type="number" {...register("doors", { valueAsNumber: true })} />
            </div>
            <div>
              <Label htmlFor="price" className="text-gray-800">Price (₦ / USD)</Label>
              <Input id="price" type="number" step="0.01" {...register("price", { valueAsNumber: true })} />
            </div>
            <div>
              <Label htmlFor="mileage" className="text-gray-800">Mileage (km)</Label>
              <Input id="mileage" type="number" {...register("mileage", { valueAsNumber: true })} />
            </div>
            <div>
              <Label htmlFor="color" className="text-gray-800">Color</Label>
              <Input id="color" type="color" {...register("color")} />
            </div>
            <div>
              <Label htmlFor="fuel_economy" className="text-gray-800">Fuel Economy</Label>
              <Input id="fuel_economy" {...register("fuel_economy")} placeholder="12 km/l" />
            </div>
            <div>
              <Label htmlFor="condition" className="text-gray-800">Condition</Label>
              <Controller
                control={control}
                name="condition"
                render={({ field }) => (
                  <Select onValueChange={(v) => field.onChange(v)} value={field.value as string | undefined}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excellent">Excellent</SelectItem>
                      <SelectItem value="Good">Good</SelectItem>
                      <SelectItem value="Fair">Fair</SelectItem>
                      <SelectItem value="Needs repair">Needs repair</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Description & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="description" className="text-gray-800">Description</Label>
              <Textarea id="description" {...register("description")} placeholder="Describe the car..." rows={4} />
            </div>
            <div>
              <Label htmlFor="features" className="text-gray-800">Features (comma-separated)</Label>
              <Input id="features" {...register("features")} placeholder="Sunroof, Leather seats, GPS" />
              <p className="text-sm text-gray-500 mt-1">Separate features with commas.</p>
            </div>
            <div>
              <Label className="text-gray-800">Is new?</Label>
              <Controller
                control={control}
                name="is_new"
                render={({ field }) => (
                  <div className="flex items-center gap-3">
                    <Switch checked={field.value} onCheckedChange={(v) => field.onChange(Boolean(v))} />
                    <span className="text-sm">{isNew ? "New" : "Used"}</span>
                  </div>
                )}
              />
            </div>
            <div>
              <Label className="text-gray-800">Upload images</Label>
              <input
                {...register("images")}
                type="file"
                accept="image/*"
                multiple
                className="mt-2 block w-full text-sm file:rounded-md file:px-3 file:py-2 file:border-0 file:bg-gray-200 file:text-gray-700"
              />
              <p className="text-sm text-gray-500 mt-1">You can upload multiple images.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="max_power" className="text-gray-800">Max Power</Label>
              <Input id="max_power" {...register("specifications.performance.max_power" as const)} placeholder="150 hp" />
            </div>
            <div>
              <Label htmlFor="max_torque" className="text-gray-800">Max Torque</Label>
              <Input id="max_torque" {...register("specifications.performance.max_torque" as const)} placeholder="200 Nm" />
            </div>
            <div>
              <Label htmlFor="acceleration" className="text-gray-800">0-100 km/h</Label>
              <Input id="acceleration" {...register("specifications.performance.acceleration" as const)} placeholder="8.5s" />
            </div>
            <div>
              <Label htmlFor="length" className="text-gray-800">Length</Label>
              <Input id="length" {...register("specifications.dimensions.length" as const)} placeholder="4,500 mm" />
            </div>
            <div>
              <Label htmlFor="wheelbase" className="text-gray-800">Wheelbase</Label>
              <Input id="wheelbase" {...register("specifications.dimensions.wheelbase" as const)} placeholder="2,700 mm" />
            </div>
            <div>
              <Label htmlFor="seating_capacity" className="text-gray-800">Seating capacity</Label>
              <Input
                id="seating_capacity"
                type="number"
                {...register("specifications.capacity.seating_capacity" as const, { valueAsNumber: true })}
              />
            </div>
            <div className="md:col-span-3">
              <Label className="text-gray-800">Safety Features</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {["ABS", "Airbags", "ESP", "Lane Assist", "Blind Spot"].map((s) => (
                  <label key={s} className="flex items-center gap-2">
                    <Checkbox id={`safety-${s}`} {...register("specifications.safety", { value: undefined })} />
                    <span className="text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Seller Info & Publish</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="seller_name" className="text-gray-800">Seller Name</Label>
              <Input id="seller_name" {...register("seller_info.name")} />
            </div>
            <div>
              <Label htmlFor="seller_phone" className="text-gray-800">Phone</Label>
              <Input id="seller_phone" type="tel" {...register("seller_info.phone")} />
            </div>
            <div>
              <Label htmlFor="seller_email" className="text-gray-800">Email</Label>
              <Input id="seller_email" type="email" {...register("seller_info.email")} />
            </div>
            <div>
              <Label htmlFor="seller_location" className="text-gray-800">Location</Label>
              <Input id="seller_location" {...register("seller_info.location")} />
            </div>
            <div>
              <Label htmlFor="business_name" className="text-gray-800">Business Name</Label>
              <Input id="business_name" {...register("seller_info.business_name")} />
            </div>
            <div>
              <Label htmlFor="business_type" className="text-gray-800">Business Type</Label>
              <Input id="business_type" {...register("seller_info.business_type")} />
            </div>
            <div className="flex items-center gap-4">
              <Label className="text-gray-800">Publish listing</Label>
              <Controller
                control={control}
                name="published"
                render={({ field }) => (
                  <RadioGroup onValueChange={(v) => field.onChange(v === "true")} value={String(field.value ?? false)}>
                    <div className="flex gap-3">
                      <label className="flex items-center gap-2">
                        <RadioGroupItem value="true" id="pub-yes" />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <RadioGroupItem value="false" id="pub-no" />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
            <div>
              <Label htmlFor="created_at" className="text-gray-800">Created at</Label>
              <Input id="created_at" type="date" {...register("created_at")} />
            </div>
            <div>
              <Label htmlFor="rating" className="text-gray-800">Visual slider</Label>
              <input type="range" min={0} max={100} className="w-full" />
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-3 justify-end">
          <Button variant="ghost" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
