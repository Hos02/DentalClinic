export function isValidFullName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) return false;

  return parts.every(
    (part) => part.length >= 2 && /^[\p{L}'-]+$/u.test(part)
  );
}

export function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}
