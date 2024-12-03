import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPartners,
  updatePartnerStatus,
} from "../../store/slice/partnersSlice";
import { AppDispatch, RootState } from "../../store/store";

const PartnersList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { partners, loading, error } = useSelector(
    (state: RootState) => state.partners
  );

  useEffect(() => {
    dispatch(fetchPartners()); // Chargement initial des partenaires
  }, [dispatch]);

  const handleStatusChange = (
    id: string,
    newStatus: "validated" | "pending" | "rejected"
  ) => {
    dispatch(updatePartnerStatus({ id, status: newStatus }));
    // Implémentez ici la mise à jour via l'API si nécessaire
  };

  if (loading) return <div className="text-center text-lg">Chargement...</div>;
  if (error)
    return <div className="text-center text-red-500">Erreur : {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des Partenaires</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Nom de l'entreprise
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Nom du Partenaire
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Email
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Téléphone
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Date d'inscription
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Pack
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Statut
              </th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr
                key={partner.id}
                className="text-center hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.companyName}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.partnerName}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.email}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.phone}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.registrationDate}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.pack}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  {partner.status}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                  <select
                    className="border rounded px-2 py-1"
                    value={partner.status}
                    onChange={(e) =>
                      handleStatusChange(partner.id, e.target.value as any)
                    }
                  >
                    <option value="validated">Success</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnersList;
