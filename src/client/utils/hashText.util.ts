import * as crypto from "crypto"

export default function HashText(text: string): string {
  return crypto.createHash('sha256').update(text).digest('hex');
}