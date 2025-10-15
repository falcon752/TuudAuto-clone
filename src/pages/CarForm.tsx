import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
import carBg from "@/assets/images/car-bg.jpg";

const MySwal = withReactContent(Swal);

// ==== Car Schema ====
const carSchema = z.object({
  brand: z.string().min(1, { message: "Brand is required" }),
  model: z.string().min(1, { message: "Model is required" }),
  year: z
    .number()
    .int()
    .min(1886, { message: "Year cannot be before 1886" })
    .max(new Date().getFullYear() + 1, {
      message: "Year cannot be in the future",
    }),
  engine_type: z.string().min(1, { message: "Engine type is required" }),
  transmission: z.enum(["Automatic", "Manual"], {
    message: "Select transmission",
  }),
  body_type: z.string().min(1, { message: "Body type is required" }),
  seats: z.number().int().min(1).max(16),
  doors: z.number().int().min(1).max(6),
  price: z.number().nonnegative({ message: "Price must be 0 or greater" }),
  is_new: z.boolean(),
  description: z.string().optional(),
  images: z.any().optional(),
  mileage: z.number().nonnegative({ message: "Mileage cannot be negative" }),
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
    name: z.string().min(1, { message: "Seller name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z.string().email().optional(),
    location: z.string().optional(),
    business_name: z.string().optional(),
    business_type: z.string().optional(),
  }),
  published: z.boolean().optional(),
  created_at: z.string().optional(),
});

type CarFormValues = z.infer<typeof carSchema>;

// ==== Default Values ====
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
  specifications: { performance: {}, dimensions: {}, capacity: {}, safety: [] },
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

const safetyOptions = ["ABS", "Airbags", "ESP", "Lane Assist", "Blind Spot"];

// ==== Car Form Component ====
const CarForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CarFormValues>({
    resolver: zodResolver(carSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const [selectedPreviews, setSelectedPreviews] = React.useState<string[]>([]);

  const isNew = watch("is_new");
  const selectedSafety = watch("specifications.safety") || [];

  const formatPrice = (value: string | number) => {
    if (typeof value === "number") value = value.toString();
    const number = Number(value.replace(/,/g, ""));
    if (isNaN(number)) return "";
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPrice(e.target.value);
    setValue("price", Number(formatted.replace(/,/g, "")));
  };

  const onSubmit = (data: CarFormValues) => {
    const featuresArray =
      typeof data.features === "string" && data.features.length > 0
        ? data.features
            .split(",")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];
    let files: File[] = [];
    if (data.images && (data.images as FileList).length)
      files = Array.from(data.images as FileList);
    const payload = {
      ...data,
      features: featuresArray,
      images: files.map((f) => f.name),
      _imagesFiles: files,
    };
    console.log("Car form submitted:", payload);

    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: "Car listing submitted successfully!",
    });
  };

  const onError = (errors: any) => {
    MySwal.fire({
      icon: "error",
      title: "Incomplete Form",
      text: "Please fill all required fields correctly.",
    });
    const firstErrorField = Object.keys(errors)[0];
    const el = document.querySelector(`[name="${firstErrorField}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const toggleSafety = (option: string) => {
    const current = selectedSafety.includes(option)
      ? selectedSafety.filter((s: string) => s !== option)
      : [...selectedSafety, option];
    setValue("specifications.safety", current);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex justify-center items-start"
      style={{ backgroundImage: `url(${carBg})` }}
    >
      <div className="w-full max-w-6xl backdrop-blur-xl bg-white/50 p-6 rounded-2xl text-black space-y-8">
        <h1 className="text-3xl font-bold text-center mb-6">Car Form</h1>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-8">
          {/* ==== Car Details Section ==== */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Brand</Label>
                <Input
                  {...register("brand")}
                  className={errors.brand ? "border-red-500" : ""}
                />
                {errors.brand && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.brand.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Model</Label>
                <Input
                  {...register("model")}
                  className={errors.model ? "border-red-500" : ""}
                />
                {errors.model && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.model.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Year</Label>
                <Input
                  type="number"
                  {...register("year", { valueAsNumber: true })}
                  className={errors.year ? "border-red-500" : ""}
                />
                {errors.year && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.year.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Engine Type</Label>
                <Input
                  {...register("engine_type")}
                  className={errors.engine_type ? "border-red-500" : ""}
                />
                {errors.engine_type && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.engine_type.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Transmission</Label>
                <Controller
                  control={control}
                  name="transmission"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Automatic">Automatic</SelectItem>
                        <SelectItem value="Manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.transmission && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.transmission.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Body Type</Label>
                <Input
                  {...register("body_type")}
                  className={errors.body_type ? "border-red-500" : ""}
                />
                {errors.body_type && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.body_type.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Seats</Label>
                <Input
                  type="number"
                  {...register("seats", { valueAsNumber: true })}
                  className={errors.seats ? "border-red-500" : ""}
                />
                {errors.seats && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.seats.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Doors</Label>
                <Input
                  type="number"
                  {...register("doors", { valueAsNumber: true })}
                  className={errors.doors ? "border-red-500" : ""}
                />
                {errors.doors && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.doors.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Price</Label>
                <Input
                  value={formatPrice(watch("price") || 0)}
                  onChange={handlePriceChange}
                  className={errors.price ? "border-red-500" : ""}
                />
                {errors.price && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Mileage</Label>
                <Input
                  type="number"
                  {...register("mileage", { valueAsNumber: true })}
                  className={errors.mileage ? "border-red-500" : ""}
                />
                {errors.mileage && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.mileage.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Color</Label>
                <Input type="color" {...register("color")} />
              </div>
              <div>
                <Label>Fuel Economy</Label>
                <Input {...register("fuel_economy")} />
              </div>
              <div>
                <Label>Condition</Label>
                <Controller
                  control={control}
                  name="condition"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Fair">Fair</SelectItem>
                        <SelectItem value="Needs repair">
                          Needs repair
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </section>

          {/* ==== Description & Features Section ==== */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Description & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Description</Label>
                <Textarea {...register("description")} />
              </div>
              <div>
                <Label>Features (comma separated)</Label>
                <Input {...register("features")} />
              </div>
              <div>
                <Label>Is New?</Label>
                <Controller
                  control={control}
                  name="is_new"
                  render={({ field }) => (
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                      <span>{isNew ? "New" : "Used"}</span>
                    </div>
                  )}
                />
              </div>
              <div>
                <Label>Upload Images</Label>
                <div className="flex items-center gap-4">
                  {/* Black button */}
                  <label className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800">
                    Choose Images
                    <input
                      type="file"
                      multiple
                      {...register("images")}
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length) {
                          const previews: string[] = [];
                          for (let i = 0; i < files.length; i++) {
                            previews.push(URL.createObjectURL(files[i]));
                          }
                          setSelectedPreviews(previews);
                        } else {
                          setSelectedPreviews([]);
                        }
                      }}
                    />
                  </label>

                  {/* Preview box */}
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedPreviews.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`preview-${index}`}
                        className="w-20 h-20 object-cover rounded border"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==== Specifications Section ==== */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Max Power</Label>
                <Input
                  {...register("specifications.performance.max_power" as const)}
                />
              </div>
              <div>
                <Label>Max Torque</Label>
                <Input
                  {...register(
                    "specifications.performance.max_torque" as const
                  )}
                />
              </div>
              <div>
                <Label>0-100 km/h</Label>
                <Input
                  {...register(
                    "specifications.performance.acceleration" as const
                  )}
                />
              </div>
              <div>
                <Label>Length</Label>
                <Input
                  {...register("specifications.dimensions.length" as const)}
                />
              </div>
              <div>
                <Label>Wheelbase</Label>
                <Input
                  {...register("specifications.dimensions.wheelbase" as const)}
                />
              </div>
              <div>
                <Label>Seating Capacity</Label>
                <Input
                  type="number"
                  {...register(
                    "specifications.capacity.seating_capacity" as const,
                    { valueAsNumber: true }
                  )}
                />
              </div>

              <div className="md:col-span-3">
                <Label>Safety Features</Label>
                <div className="flex flex-wrap gap-3">
                  {safetyOptions.map((s) => (
                    <label key={s} className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedSafety.includes(s)}
                        onCheckedChange={() => toggleSafety(s)}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==== Seller Info & Publish Section ==== */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Seller Info & Publish
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Seller Name</Label>
                <Input
                  {...register("seller_info.name")}
                  className={errors.seller_info?.name ? "border-red-500" : ""}
                />
                {errors.seller_info?.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.seller_info.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  {...register("seller_info.phone")}
                  className={errors.seller_info?.phone ? "border-red-500" : ""}
                />
                {errors.seller_info?.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.seller_info.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" {...register("seller_info.email")} />
              </div>
              <div>
                <Label>Location</Label>
                <Input {...register("seller_info.location")} />
              </div>
              <div>
                <Label>Business Name</Label>
                <Input {...register("seller_info.business_name")} />
              </div>
              <div>
                <Label>Business Type</Label>
                <Input {...register("seller_info.business_type")} />
              </div>
              <div>
                <Label>Publish Listing</Label>
                <Controller
                  control={control}
                  name="published"
                  render={({ field }) => (
                    <RadioGroup
                      value={String(field.value ?? false)}
                      onValueChange={(v) => field.onChange(v === "true")}
                    >
                      <div className="flex gap-3">
                        <label className="flex items-center gap-2">
                          <RadioGroupItem value="true" />
                          Yes
                        </label>
                        <label className="flex items-center gap-2">
                          <RadioGroupItem value="false" />
                          No
                        </label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
              <div>
                <Label>Created At</Label>
                <Input type="date" {...register("created_at")} />
              </div>
              <div>
                <Label>Visual Slider</Label>
                <input type="range" min={0} max={100} className="w-full" />
              </div>
            </div>
          </section>

          {/* ==== Form Actions ==== */}
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => reset()}>
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
