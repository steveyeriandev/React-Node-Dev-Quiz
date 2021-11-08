interface IMedication {
    medication_id: number
    display_name: string
    strength: string
    route: string
    directions: string
    quantity: number
}

interface IPrescription {
    prescription_id?: number
    drug_name?: string
    strength?: string
    route?: string
    instructions?: string
    dispense?: number
}

const t = (medication: IMedication): IPrescription => {
    const map: { [key: string]: string } = {
        medication_id: 'prescription_id',
        display_name: 'drug_name',
        directions: 'instructions',
        notes: 'instructions',
        quantity: 'dispense',
    };
    return Object.keys(medication).reduce((carry: Partial<IPrescription>, k: string) => {
        return {
            ...carry,
            [(map[k] !== undefined ? map[k] : k)]: medication[k],
        }

    }, {});

}
const medication: IMedication = {
    medication_id: 12345,
    display_name: "Lipitor",
    strength: "20 mg",
    route: "by mouth",
    directions: "Take 1 tablet daily",
    quantity: 30,
};
const result = t(medication);

console.log(result);