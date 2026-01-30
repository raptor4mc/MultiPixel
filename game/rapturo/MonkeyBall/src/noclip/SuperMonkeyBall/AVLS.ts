import ArrayBufferSlice from "../ArrayBufferSlice.js";
import { lzssDecompress } from "../../lzs.js";

export function decompressLZ(compressedBuf: ArrayBufferSlice): ArrayBufferSlice {
    const view = compressedBuf.createDataView();
    const compressedView = compressedBuf.subarray(0x8).createDataView();
    const uncompressedSize = view.getUint32(0x4, true);
    const input = compressedBuf.copyToBuffer(0);
    const output = lzssDecompress(input);
    return new ArrayBufferSlice(output.buffer);
}
