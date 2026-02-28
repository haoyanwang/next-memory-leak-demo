import { NextResponse } from 'next/server';
import v8 from 'v8';

export async function GET() {
    const heapSnapshot = v8.writeHeapSnapshot();

    // 读取生成的堆快照文件
    const fs = await import('fs');
    const heapBuffer = fs.readFileSync(heapSnapshot);

    return new NextResponse(heapBuffer, {
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition':
                'attachment; filename="heap-snapshot.heapsnapshot"',
        },
    });
}
