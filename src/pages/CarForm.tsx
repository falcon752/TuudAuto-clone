import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import "../styles/CarForm.css"

const carSchema = z.object({
  brand: z.string().min(1),
  model: z.string().min(1),
  year: z.number(),
  engine_type: z.string(),
  transmission: z.enum(["Automatic", "Manual"]),
  body_type: z.string(),
  seats: z.number(),
  doors: z.number(),
  price: z.number(),
  mileage: z.number(),
  color: z.string(),
  fuel_economy: z.string(),
  condition: z.string(),
  description: z.string(),
  is_new: z.boolean(),
  published: z.boolean(),
  features: z.array(z.string()).optional(),
  images: z.any(),
  seller_name: z.string(),
  seller_phone: z.string(),
  seller_email: z.string(),
  seller_location: z.string(),
  business_name: z.string().optional(),
  business_type: z.string().optional(),
})

type CarFormData = z.infer<typeof carSchema>

const CarForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
  })

  const onSubmit = (data: CarFormData) => {
    console.log("Form data:", data)
  }

  return (
    <div className="car-form-container">
      <h2>Car Creation Form</h2>
      <form className="car-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
          <input {...register("brand")} placeholder="Brand" />
          <input {...register("model")} placeholder="Model" />
          <input type="number" {...register("year", { valueAsNumber: true })} placeholder="Year" />
          <input {...register("engine_type")} placeholder="Engine Type" />

          <select {...register("transmission")}>
            <option value="">Transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>

          <input {...register("body_type")} placeholder="Body Type" />
          <input type="number" {...register("seats", { valueAsNumber: true })} placeholder="Seats" />
          <input type="number" {...register("doors", { valueAsNumber: true })} placeholder="Doors" />
          <input type="number" step="0.01" {...register("price", { valueAsNumber: true })} placeholder="Price" />
          <input type="number" {...register("mileage", { valueAsNumber: true })} placeholder="Mileage" />
          <input {...register("color")} placeholder="Color" />
          <input {...register("fuel_economy")} placeholder="Fuel Economy" />
          <input {...register("condition")} placeholder="Condition" />
        </div>

        <textarea {...register("description")} placeholder="Description" rows={3} />

        <div className="checkbox-group">
          <label><input type="checkbox" {...register("is_new")} /> New Car</label>
          <label><input type="checkbox" {...register("published")} /> Published</label>
        </div>

        <label className="file-input">
          Upload Images
          <input type="file" multiple {...register("images")} />
        </label>

        <label>Features (comma-separated)</label>
        <input {...register("features")} placeholder="e.g. Sunroof, Leather seats, GPS" />

        <hr />

        <h3>Seller Info</h3>
        <div className="form-grid">
          <input {...register("seller_name")} placeholder="Seller Name" />
          <input {...register("seller_phone")} placeholder="Phone" />
          <input {...register("seller_email")} placeholder="Email" />
          <input {...register("seller_location")} placeholder="Location" />
          <input {...register("business_name")} placeholder="Business Name" />
          <input {...register("business_type")} placeholder="Business Type" />
        </div>

        <div className="btn-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => reset()}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
