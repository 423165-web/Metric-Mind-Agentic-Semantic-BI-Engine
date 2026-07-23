const demoResponse = `
European margins dropped by 12% in the last quarter.

The main reasons are:

• Increased logistics costs across Europe.
• Higher manufacturing expenses.
• Lower electronics sales in Germany.
• Currency exchange rate fluctuations.

Recommendation:

Review logistics contracts, optimize inventory planning, and evaluate regional pricing strategies.
`;

export async function fakeStream(
  onChunk: (text: string) => void
): Promise<void> {
  const words = demoResponse.trim().split(" ");

  let currentText = "";

  for (const word of words) {
    currentText += word + " ";

    onChunk(currentText);

    // Simulate AI typing speed
    await new Promise((resolve) => setTimeout(resolve, 60));
  }
}