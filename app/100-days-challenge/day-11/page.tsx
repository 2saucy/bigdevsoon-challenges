"use client";
import { ChangeEvent, useState } from "react";
import { FaChevronDown, FaChevronUp, FaLocationDot } from "react-icons/fa6";

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-day-11 bg-cover bg-center">
      <Card>
        <FormContainer />
        <ImageContainer />
      </Card>
    </main>
  );
};

export default Page;

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-6 bg-slate-50 p-6 shadow-xl max-md:flex-col max-sm:min-h-screen sm:my-12 sm:w-3/4 sm:rounded-2xl md:flex-row">
      {children}
    </div>
  );
};

type FormData = {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrens: number;
};

const FormContainer = () => {
  const currentDate = new Date();
  const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  const [formData, setFormData] = useState<FormData>({
    checkIn: currentDate.toISOString().split("T")[0],
    checkOut: nextWeek.toISOString().split("T")[0],
    adults: 1,
    childrens: 0,
  });

  const onSubmit = () => {
    console.log(formData);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="basis-1/3">
      <form
        className="flex h-full flex-col justify-between"
        onSubmit={onSubmit}
      >
        <div className="space-y-4">
          <InputContainer
            type="date"
            name="checkIn"
            label="Check-in"
            min={currentDate.toISOString().split("T")[0]}
            value={formData.checkIn}
            onChange={onChange}
          />
          <InputContainer
            type="date"
            name="checkOut"
            label="Check-out"
            min={currentDate.toISOString().split("T")[0]}
            value={formData.checkOut}
            onChange={onChange}
          />
          <div className="flex items-center gap-4 text-sm">
            <InputContainer
              type="number"
              name="adults"
              label="Adults"
              readOnly
              selectLike
              value={formData.adults}
              onChange={onChange}
              selectList={[1, 2, 3, 4]}
            />
            <InputContainer
              type="number"
              name="childrens"
              label="Childrens"
              readOnly
              selectLike
              value={formData.childrens}
              onChange={onChange}
              selectList={[0, 1, 2, 3, 4]}
            />
          </div>
        </div>
        <button className="mt-4 w-full rounded-full bg-[#ff8a00] py-2 text-slate-50 shadow-lg duration-150 ease-in-out hover:bg-orange-700">
          Book a room
        </button>
      </form>
    </div>
  );
};

const ImageContainer = () => {
  return (
    <div className="flex basis-2/3 flex-col space-y-4">
      <div className="relative h-[80%]">
        <img
          className="h-full w-full object-cover"
          src="/assets/100-days-challenge/day-11/edvin-johansson-rlwE8f8anOc-unsplash.jpg"
          alt=""
        />
        <div className="absolute bottom-4 left-4 text-slate-50">
          <p className="font-semibold">Golden Apartments</p>
          <p className="flex items-center gap-2 font-light">
            <FaLocationDot />
            Punta Cana, Dominican Republic
          </p>
        </div>
      </div>
      <div className="flex h-[20%] gap-2">
        <div className="basis-1/3">
          <img
            className="h-full w-full object-cover"
            src="/assets/100-days-challenge/day-11/edvin-johansson-rlwE8f8anOc-unsplash.jpg"
          />
        </div>
        <div className="basis-1/3">
          <img
            className="h-full w-full object-cover"
            src="/assets/100-days-challenge/day-11/bhumil-chheda-o1lALNEP2BQ-unsplash.jpg"
          />
        </div>
        <div className="basis-1/3">
          <img
            className="h-full w-full object-cover"
            src="/assets/100-days-challenge/day-11/anmol-seth-hDbCjHNdF48-unsplash.jpg"
          />
        </div>
      </div>
    </div>
  );
};

interface InputContainerProps {
  type: string;
  readOnly?: boolean;
  selectLike?: boolean;
  name: string;
  label: string;
  min?: string;
  max?: string;
  value?: number | string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  selectList?: number[] | string[];
}

const InputContainer: React.FC<InputContainerProps> = ({
  type,
  readOnly,
  selectLike,
  name,
  label,
  min,
  max,
  value,
  onChange,
  selectList,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSelectChange = (selectedValue: string | number) => {
    onChange &&
      onChange({
        target: { name, value: selectedValue.toString() },
      } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex basis-1/2 flex-col gap-2 text-sm">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <div
        className="relative rounded-lg bg-[#e4e4e4] p-2"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
      >
        <div className="flex items-center justify-between">
          <input
            value={value}
            type={type}
            className="w-full bg-transparent text-black/40 outline-none"
            name={name}
            id={name}
            readOnly={readOnly || selectLike}
            min={min}
            max={max}
            onChange={onChange}
          />
          {selectLike === true && (
            <>{isFocused ? <FaChevronUp /> : <FaChevronDown />}</>
          )}
        </div>
        {selectLike === true && (
          <>
            {isFocused && (
              <Dropdown
                list={selectList !== undefined ? selectList : []}
                setValue={handleSelectChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Dropdown = ({
  list,
  setValue,
}: {
  list: number[] | string[];
  setValue: (value: number | string) => void;
}) => {
  return (
    <div className="absolute left-1/2 top-10 flex w-full -translate-x-1/2 flex-col overflow-hidden rounded-lg bg-slate-50 shadow-lg">
      {list.map((item) => (
        <button
          type="button"
          className="px-2 py-0.5 text-start text-black/40 hover:bg-[#e4e4e4] hover:text-black"
          onClick={() => setValue(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
