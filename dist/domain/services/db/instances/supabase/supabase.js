import supabase_get_user from "./use_cases/users/supabase_get_user.js";
import supabase_register from "./use_cases/users/supabase_register.js";
import supabase_get_users from "./use_cases/users/supabase_get_users.js";
import supabase_post_transfer from "./use_cases/transfers/supabase_post_transfer.js";
import supabase_post_transfer_users from "./use_cases/transfers/supabase_post_transfer_users.js";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase_variables.js";
import supabase_get_transfers from "./use_cases/transfers/supabase_get_transfers.js";
import supabase_get_observations from "./use_cases/observations/supabase_get_observations.js";
import supabase_get_transfer from "./use_cases/transfers/supabase_get_transfer.js";
import supabase_post_observation from "./use_cases/observations/supabase_post_observation.js";
import supabase_get_observation from "./use_cases/observations/supabase_get_observation.js";
import supabase_delete_transfer from "./use_cases/transfers/supabase_delete_transfer.js";
import supabase_delete_observation from "./use_cases/observations/supabase_delete_observation.js";
import supabase_conclude_observation from "./use_cases/observations/supabase_conclude_observation.js";
import supabase_conclude_transfer from "./use_cases/transfers/supabase_conclude_transfer.js";
import supabase_reactivate_transfer from "./use_cases/transfers/supabase_reactivate_transfer.js";
import supabase_reactivate_observation from "./use_cases/observations/supabase_reactivate_observation.js";
import supabase_update_transfer from "./use_cases/transfers/supabase_update_transfer.js";
import supabase_update_observation from "./use_cases/observations/supabase_update_observation.js";
import supabase_update_profile from "./use_cases/users/supabase_update_profile.js";
import supabase_channel_user_notifications from "./use_cases/notifications/supabase_channel_user_notifications.js";
import supabase_get_notifications from "./use_cases/notifications/supabase_get_notifications.js";
import supabase_post_user_notifications from "./use_cases/notifications/supabase_post_user_notifications.js";
import supabase_post_notifications from "./use_cases/notifications/supabase_post_notifications.js";
import supabase_get_user_transfers from "./use_cases/transfers/supabase_get_user_transfers.js";
import supabase_get_transfer_users from "./use_cases/transfers/supabase_get_transfer_users.js";
import supabase_delete_user_notification from "./use_cases/notifications/supabase_delete_user_notification.js";
import supabase_update_user_notification from "./use_cases/notifications/supabase_update_user_notification.js";
import supabase_delayed_notification from "./use_cases/notifications/supabase_delayed_notification.js";
class Supabase {
    supabase;
    constructor() {
        this.supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
            realtime: {
                params: {
                    log_level: 'info'
                }
            }
        });
    }
    async get_user(params) {
        return await supabase_get_user(params, this.supabase);
    }
    async register(params) {
        return await supabase_register(params, this.supabase);
    }
    async get_users() {
        return await supabase_get_users(this.supabase);
    }
    async update_profile(params) {
        return await supabase_update_profile(params, this.supabase);
    }
    async get_transfer(params) {
        return await supabase_get_transfer(params, this.supabase);
    }
    async get_transfers(params) {
        return await supabase_get_transfers(params, this.supabase);
    }
    async post_transfer(params) {
        return await supabase_post_transfer(params, this.supabase);
    }
    async delete_transfer(params) {
        return await supabase_delete_transfer(params, this.supabase);
    }
    async get_user_transfers(params) {
        return await supabase_get_user_transfers(params, this.supabase);
    }
    async post_transfer_users(params) {
        return await supabase_post_transfer_users(params, this.supabase);
    }
    async conclude_transfer(params) {
        return await supabase_conclude_transfer(params, this.supabase);
    }
    async reactivate_transfer(params) {
        return await supabase_reactivate_transfer(params, this.supabase);
    }
    async update_transfer(params) {
        return await supabase_update_transfer(params, this.supabase);
    }
    async get_transfer_users(params) {
        return await supabase_get_transfer_users(params, this.supabase);
    }
    async get_observations(params) {
        return await supabase_get_observations(params, this.supabase);
    }
    async post_observation(params) {
        return await supabase_post_observation(params, this.supabase);
    }
    async get_observation(params) {
        return await supabase_get_observation(params, this.supabase);
    }
    async delete_observation(params) {
        return await supabase_delete_observation(params, this.supabase);
    }
    async conclude_observation(params) {
        return await supabase_conclude_observation(params, this.supabase);
    }
    async reactivate_observation(params) {
        return await supabase_reactivate_observation(params, this.supabase);
    }
    async update_observation(params) {
        return await supabase_update_observation(params, this.supabase);
    }
    async channel_user_notifications(params, on_notification) {
        return await supabase_channel_user_notifications(params, this.supabase, on_notification);
    }
    async get_notifications(params) {
        return await supabase_get_notifications(params, this.supabase);
    }
    async post_user_notifications(params) {
        return await supabase_post_user_notifications(params, this.supabase);
    }
    async post_notifications(params) {
        return await supabase_post_notifications(params, this.supabase);
    }
    async delete_user_notification(params) {
        return await supabase_delete_user_notification(params, this.supabase);
    }
    async update_user_notification(params) {
        return await supabase_update_user_notification(params, this.supabase);
    }
    async delayed_notification(params) {
        return await supabase_delayed_notification(params, this.supabase);
    }
}
export default Supabase;
