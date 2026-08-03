const RESPONSE = `European margins dropped by 12% in the last quarter.

The main reasons are:

• Increased logistics costs across Europe.
• Higher manufacturing expenses.
• Lower electronics sales in Germany.
• Currency exchange rate fluctuations.

Recommendation:

Review logistics contracts, optimize inventory planning, and evaluate regional pricing strategies.`;

export async function fakeStream(
  onChunk: (text: string) => void
): Promise<void> {
  let current = "";

  const words = RESPONSE.split(" ");

  for (const word of words) {
    current += word + " ";

    onChunk(current);

    await new Promise((resolve) => setTimeout(resolve, 60));
  }
}