import { MultiSelect, type Option } from "@/components/ds/multi-select";
import { Rabbit } from "lucide-react";
import { useState } from "react";
const options: Option[] = [
    { label: "Apple", value: "apple", category: "Fruits", icon: <Rabbit /> },
    { label: "Banana", value: "banana", category: "Fruits", icon: <Rabbit /> },
    { label: "Cherry", value: "cherry", category: "Fruits", icon: <Rabbit /> },
    { label: "Date", value: "date", category: "Fruits", icon: <Rabbit /> },
    { label: "Elderberry", value: "elderberry", category: "Fruits", icon: <Rabbit /> },
    { label: "Carrot", value: "carrot", category: "Vegetables", icon: <Rabbit /> },
    { label: "Broccoli", value: "broccoli", category: "Vegetables", icon: <Rabbit /> },
    { label: "Spinach", value: "spinach", category: "Vegetables", icon: <Rabbit /> },
    { label: "Potato", value: "potato", category: "Vegetables", icon: <Rabbit /> },
    { label: "Tomato", value: "tomato", category: "Vegetables", icon: <Rabbit /> },
    { label: "Milk", value: "milk", category: "Dairy", icon: <Rabbit /> },
    { label: "Cheese", value: "cheese", category: "Dairy", icon: <Rabbit /> },
    { label: "Yogurt", value: "yogurt", category: "Dairy", icon: <Rabbit /> },
]


export default function MultiSelectHome() {
    const [selected, setSelected] = useState<Option[]>([]);

    return (
        <div className="min-h-screen" >
            <div className="mt-10 mx-2">
                <MultiSelect
                    startIcon={<Rabbit />}
                    endIcon={<Rabbit />}
                    showIconsForOptions={true}
                    options={options}
                    searchable={false}
                    selected={selected}
                    selectionType="checkbox"
                    selectionPosition="left"
                    onChange={setSelected}
                    // disabled
                    placeholder="Select items..."
                    groupedView={false}
                // warningText="This is a warning message."
                errorText="This is an error message."
                // informationText="This Fis an informational message."
                />

            </div>
        </div >
    );
}
