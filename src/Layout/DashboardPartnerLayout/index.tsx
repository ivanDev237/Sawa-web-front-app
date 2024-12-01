import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PartnerSidebar from "../../components/PartnerSidebar";
import PartnerHeader from "../../components/PartnerHeader";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

const DashboardPartnerLayout: React.FC = () => { 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <PartnerSidebar className="max-[909px]:hidden " active="dashboard" onSelect={() => {}} />
            <div className="min-[909px]:ml-72 ml-0">
                <PartnerHeader /> 
                <main className="">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DashboardPartnerLayout;
