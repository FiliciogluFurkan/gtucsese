export class DecodedJwt {
  private readonly parts: {
    header: any;
    payload: any;
    signature: string;
  };

  private readonly token: string;

  constructor(token: string) {
    this.token = token;
    const parts = this.token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT token format");
    }

    try {
      this.parts = {
        header: JSON.parse(this.base64UrlDecode(parts[0])),
        payload: JSON.parse(this.base64UrlDecode(parts[1])),
        signature: parts[2],
      };
    } catch (error) {
      throw new Error("Failed to parse JWT token");
    }
  }

  private base64UrlDecode(input: string): string {
    // Add padding
    const pad = input.length % 4;
    let base64 = input;
    if (pad) {
      base64 += "=".repeat(4 - pad);
    }

    // Replace URL-safe characters
    base64 = base64.replace(/-/g, "+").replace(/_/g, "/");

    try {
      // Use built-in atob() function which is available in browsers
      return decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
    } catch {
      throw new Error("Failed to decode base64url string");
    }
  }

  // Get raw decoded parts
  public getHeader(): any {
    return this.parts.header;
  }

  public getPayload(): any {
    return this.parts.payload;
  }

  public getSignature(): string {
    return this.parts.signature;
  }

  // Type-safe claim getters
  public getClaim<T>(key: string): T | undefined {
    return this.parts.payload[key] as T;
  }

  public getClaimAsString(key: string): string | undefined {
    const value = this.getClaim<string>(key);
    return value;
  }

  public getClaimAsNumber(key: string): number | undefined {
    const value = this.getClaim<number>(key);
    return value;
  }

  public getClaimAsBoolean(key: string): boolean | undefined {
    const value = this.getClaim<boolean>(key);
    return value;
  }

  public getClaimAsDate(key: string): Date | undefined {
    const value = this.getClaim<number>(key);
    return value ? new Date(value * 1000) : undefined;
  }

  // Common JWT claims
  public getSubject(): string | undefined {
    return this.getClaimAsString("sub");
  }

  public getIssuer(): string | undefined {
    return this.getClaimAsString("iss");
  }

  public getAudience(): string | string[] | undefined {
    return this.getClaim<string | string[]>("aud");
  }

  public getExpirationTime(): Date | undefined {
    return this.getClaimAsDate("exp");
  }

  public getIssuedAt(): Date | undefined {
    return this.getClaimAsDate("iat");
  }

  public isExpired(): boolean {
    const exp = this.getExpirationTime();
    return exp ? exp.getTime() < Date.now() : false;
  }
}


export const getIdFromToken = (token: string | undefined) => {
  if (!token) return null;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};
