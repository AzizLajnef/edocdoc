const { Doctor } = require('../database-mysql/index');

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.status(200).json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
}

const getDoctorById = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findOne({ where: { id } });
        if (doctor) {
            res.status(200).json(doctor);
        } else {
            res.status(404).json({ error: 'Doctor not found' });
        }
    } catch (error) {
        console.error('Error fetching doctor:', error);
        res.status(500).json({ error: 'Failed to fetch doctor' });
    }
}


const createDoctor = async (req, res) => {
    try {
        const body = req.body;
        const doctor = await Doctor.create(body);
        res.status(201).json(doctor);
    } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).json({ error: 'Failed to create doctor' });
    }
}
const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const doctor = await Doctor.findOne({ where: { id } });
        if (doctor) {
            await doctor.update(body);
            res.status(200).json(doctor);
        } else {
            res.status(404).json({ error: 'Doctor not found' });
        }
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(500).json({ error: 'Failed to update doctor' });
    }
}

const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findOne({ where: { id } });
        if (doctor) {
            await doctor.destroy();
            res.status(200).json({ message: 'Doctor deleted successfully' });
        } else {
            res.status(404).json({ error: 'Doctor not found' });
        }
    } catch (error) {
        console.error('Error deleting doctor:', error);
        res.status(500).json({ error: 'Failed to delete doctor' });
    }
}

module.exports = {
    getAllDoctors,
    createDoctor,
    getDoctorById,
    updateDoctor,
    deleteDoctor

};