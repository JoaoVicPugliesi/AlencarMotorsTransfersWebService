import { SupabaseClient } from "@supabase/supabase-js";
import { Update_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";

async function supabase_update_transfer (params: Update_Transfer_DTO_Request, supabase: SupabaseClient) {
    let query;
    query = supabase
    .from('transfers')
    .update({
        name: params.name,
        plate: params.plate,
        vehicle: params.vehicle
    })
    .eq('id', params.id)
    .select()
    .maybeSingle();

    const { data, error } = await query;

    if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        }
    }

    if (!data) {
        return {
            status: 404,
            message: 'Transferência não existe',
            payload: null
        }
    }
    return {
        status: 200,
        message: 'Transferência atualizada com sucesso',
        payload: data
    }
}

export default supabase_update_transfer;