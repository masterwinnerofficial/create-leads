import { LeadSchema } from '../models/leads';



export const newLead = async (req, res) => {
    const { first_name, last_name, email } = req.body;
    try {
        const lead = new LeadSchema({
            first_name,
            last_name,
            email
        });
    
        const response = await lead.save();

        return await res.json(response)
    } catch (error) {
        return res.json(error)
    }
}