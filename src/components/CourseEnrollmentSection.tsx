import React from 'react';
import CourseForm from './CourseForm';
import { Phone, Mail } from 'lucide-react';

const CourseEnrollmentSection: React.FC = () => {
    return (
        <section className="bg-background py-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="text-light text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        TORNE-SE UM BARBEIRO DE ELITE
                    </h2>
                    <p className="text-muted mt-6 text-lg leading-relaxed">
                        O nosso curso intensivo oferece formação prática com os melhores profissionais. Aprenda as técnicas, a arte e o negócio da barbearia moderna e comece uma carreira de sucesso.
                    </p>
                    <div className="mt-8 space-y-4 flex flex-col items-center lg:items-start">
                        <div className="flex items-center">
                            <Phone size={24} className="text-primary mr-4" />
                            <span>Ligue para nós: +55 (81) 99999-8888</span>
                        </div>
                        <div className="flex items-center">
                            <Mail size={24} className="text-primary mr-4" />
                            <span>Envie um email: curso@mestrebarbearia.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <CourseForm />
                </div>
            </div>
        </section>
    );
};

export default CourseEnrollmentSection;