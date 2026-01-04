# 🚀 Distributed API Task System

A **production-grade backend infrastructure project** designed to demonstrate deep understanding of **rate limiting**, **distributed job processing**, **retries**, **idempotency**, and **system reliability**.

This is **not** a demo app or CRUD project.
It is a **real backend system** similar to what powers modern APIs, notification systems, and internal services.

---

## 🎯 Why This Project Exists

Real backend systems must:

- Protect APIs from abuse
- Rate-limit requests accurately
- Process heavy tasks asynchronously
- Retry failures safely
- Avoid duplicate side effects
- Stay stable under load
- Shut down gracefully
- Be observable and debuggable

---

## 🧠 What This Project Proves

- ✅ Strong understanding of **rate limiting (sliding window)**
- ✅ Deep knowledge of **Redis beyond GET/SET**
- ✅ Practical experience with **BullMQ**
- ✅ Clear thinking around **retries, failures, and idempotency**
- ✅ Ability to design **reliable backend systems**

---

## 🏗️ High-Level Architecture

```
Client
  ↓
Express API (Gateway)
  ├─ Zod Validation
  ├─ Redis Rate Limiting (Sliding Window)
  ├─ Request Monitoring
  ↓
BullMQ Queue
  ↓
Worker Process
  ↓
Redis (Jobs, Retries, State, Metrics)
```

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Redis (ioredis)**
- **BullMQ**
- **Zod**

---

## 📂 Folder Structure

```
src/
  config/         # Environment & Redis configuration
  server/         # Express app & server bootstrap
  middlewares/    # Validation, rate limiting, monitoring
  rate-limiter/   # Sliding window rate limit logic
  queues/         # BullMQ queue setup
  workers/        # Background workers
  routes/         # API routes (jobs, monitoring, metrics)
  logs/           # Rate-limit & system logs
  utils/          # Idempotency, retry, execution guards
  types/          # Shared TypeScript types
  errors/         # Global error handling
```

---

## 🚦 Key System Features

### 1️⃣ API Gateway

- Central entry point
- Typed request lifecycle
- Global error handling
- Validation before logic

---

### 2️⃣ Advanced Rate Limiting (Redis)

- Sliding window algorithm
- Redis **Sorted Sets (ZSET)**
- IP-based, User-based, Route-based limits
- Priority-based enforcement
- Custom error responses

**Why sliding window?**

- Prevents burst attacks
- Fair request distribution
- Industry-grade accuracy

---

### 3️⃣ Asynchronous Job Processing (BullMQ)

- Domain-based queues (email, etc.)
- Separate worker processes
- Controlled concurrency
- Retry + exponential backoff
- Delayed job scheduling

---

### 4️⃣ Idempotency & Safety

- Producer-level idempotency (Redis SET NX)
- Worker-level execution guards
- Exactly-once **effects**
- Safe retries without duplication

---

### 5️⃣ Failure Handling & Dead Jobs

- Failure-aware retry strategy
- Non-retryable job detection
- Dead job (DLQ) inspection APIs
- Detailed failure reasons

---

### 6️⃣ Observability & Monitoring

- Blocked request logs
- Job state APIs
- Request usage metrics
- Time-bucketed counters (Redis)

---

### 7️⃣ Graceful Shutdown

- SIGTERM / SIGINT handling
- HTTP request draining
- Worker-safe shutdown
- Redis connection cleanup

---

## 🔍 Important API Endpoints

### Health

```
GET /health
```

---

### Create Email Job

```
POST /jobs/email
```

---

### Schedule Email Job

```
POST /jobs/email/schedule
```

---

### Job Status

```
GET /jobs/status/:queue/:jobId
```

---

### Dead Jobs Inspection

```
GET /dead-jobs/email
```

---

### Monitoring

```
GET /monitoring/rate-limits/blocked
GET /metrics/requests
GET /metrics/blocked
```

---

## ▶️ Running the Project

### Prerequisites

- Node.js 18+
- Redis

### Install dependencies

```bash
npm install
```

### Start API server

```bash
npm run dev
```

### Start worker process

```bash
npm run worker:dev
```
