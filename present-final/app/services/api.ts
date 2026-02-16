// api.ts
export async function fetchBatches(): Promise<Batch[]> {
  const res = await fetch("http://localhost:8000/api/batches/")
  if (!res.ok) throw new Error("Failed to fetch batches")
  return res.json()
}

export async function createBatch(batch: Omit<Batch, "batch_id">) {
  const res = await fetch("http://localhost:8000/api/batches/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(batch),
  })
  if (!res.ok) throw new Error("Failed to create batch")
  return res.json()
}

export async function updateBatch(batch_id: string, batch: Partial<Batch>) {
  const res = await fetch(`http://localhost:8000/api/batches/${batch_id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(batch),
  })
  if (!res.ok) throw new Error("Failed to update batch")
  return res.json()
}

export async function deleteBatch(batch_id: string) {
  const res = await fetch(`http://localhost:8000/api/batches/${batch_id}/`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error("Failed to delete batch")
  return true
}
