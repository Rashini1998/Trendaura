interface Props {

    value: string[];

    onChange: (sizes: string[]) => void;

}

const SIZES = [

    "S",

    "M",

    "L",

    "XL",

    "XXL",

];

export default function SizeSelector({

    value,

    onChange,

}: Props) {

    function toggle(size: string) {

        if (value.includes(size)) {

            onChange(

                value.filter((s) => s !== size)

            );

        }

        else {

            onChange([...value, size]);

        }

    }

    return (

        <div className="flex gap-3 flex-wrap">

            {SIZES.map((size) => (

                <button

                    type="button"

                    key={size}

                    onClick={() => toggle(size)}

                    className={`border px-4 py-2 rounded

                    ${value.includes(size)

                            ? "bg-black text-white"

                            : ""

                        }`}

                >

                    {size}

                </button>

            ))}

        </div>

    );

}
