export const handleMaxInput = (e: React.FormEvent<HTMLInputElement>, length: number) => {
    // console.log("Input event:", e);
    const target = e.target as HTMLInputElement;
    target.value = target.value.slice(0, length);
  };