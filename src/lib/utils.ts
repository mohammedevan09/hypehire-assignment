export const data = async (endpoint: string) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + endpoint, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error('There is an error occurred');
  }
};
