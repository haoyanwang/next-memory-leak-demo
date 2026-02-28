# Next.js Memory Leak Demo

This is a [Next.js](https://nextjs.org) project demonstrating a memory leak scenario.

## Memory Leak Demo

This project demonstrates a memory leak issue in a Next.js application running in Docker.

### Prerequisites

- Docker

### Quick Start

1. **Build the Docker image:**

```bash
docker build -t next-memory-leak-demo .
```

2. **Run the container:**

```bash
docker run -d -p 3000:3000 --name next-demo next-memory-leak-demo
```

3. **Access the application:**

- Web UI: [http://localhost:3000](http://localhost:3000)
- API Endpoint: [http://localhost:3000/api](http://localhost:3000/api)

### How the Memory Leak Works

When the API endpoint is accessed, the server generates a heap snapshot. Repeated calls to this endpoint accumulate memory, causing a memory leak.

- **Frontend page** (`/`): Makes a request to an external API (`https://cataas.com/api/tags`) and renders the data
- **API endpoint** (`/api`): Each request calls `v8.writeHeapSnapshot()` to generate a heap snapshot file. Frequent calls cause memory to grow continuously

### Monitor Memory Usage

Monitor container memory usage with:

```bash
docker stats next-demo
```

### Cleanup

```bash
docker stop next-demo
docker rm next-demo
```
