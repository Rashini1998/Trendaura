interface Props {

    value: string[];

    onChange: (colors: string[]) => void;

}

const COLORS = [

    "Black",

    "White",

    "Blue",

    "Gray",

    "Green",

];

export default function ColorSelector({

    value,

    onChange,

}: Props) {

    function toggle(color: string) {

        if (value.includes(color)) {

            onChange(

                value.filter((c) => c !== color)

            );

        }

        else {

            onChange([...value, color]);

        }

    }

    return (

        <div className="flex flex-wrap gap-3">

            {COLORS.map((color) => (

                <button

                    type="button"

                    key={color}

                    onClick={() => toggle(color)}

                    className={`rounded-full px-4 py-2 border

                    ${value.includes(color)

                            ? "bg-black text-white"

                            : ""

                        }`}

                >

                    {color}

                </button>

            ))}

        </div>

    );

}
