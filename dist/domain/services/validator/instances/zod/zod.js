import zod_register from "./use_cases/users/zod_register.js";
import zod_login from "./use_cases/users/zod_login.js";
import zod_get_users from "./use_cases/users/zod_get_users.js";
import zod_post_transfer from "./use_cases/transfers/zod_post_transfer.js";
import zod_get_transfers from "./use_cases/transfers/zod_get_transfers.js";
import zod_get_observations from "./use_cases/observations/zod_get_observations.js";
import zod_get_transfer from "./use_cases/transfers/zod_get_transfer.js";
import zod_post_observation from "./use_cases/observations/zod_post_observation.js";
import zod_get_observation from "./use_cases/observations/zod_get_observation.js";
import zod_delete_transfer from "./use_cases/transfers/zod_delete_transfer.js";
import zod_delete_observation from "./use_cases/observations/zod_delete_observation.js";
import zod_conclude_observation from "./use_cases/observations/zod_conclude_observation.js";
import zod_conclude_transfer from "./use_cases/transfers/zod_conclude_transfer.js";
import zod_reactivate_transfer from "./use_cases/transfers/zod_reactivate_transfer.js";
import zod_reactivate_observation from "./use_cases/observations/zod_reactivate_observation.js";
import zod_update_transfer from "./use_cases/transfers/zod_update_transfer.js";
import zod_update_observation from "./use_cases/observations/zod_update_observation.js";
import zod_update_profile from "./use_cases/users/zod_update_profile.js";
import zod_post_user_notifications from "./use_cases/notifications/zod_post_user_notifications.js";
import zod_post_notifications from "./use_cases/notifications/zod_post_notifications.js";
import zod_get_transfer_users from "./use_cases/transfers/zod_get_transfer_users.js";
import zod_delete_user_notification from "./use_cases/notifications/zod_delete_user_notification.js";
import zod_update_user_notification from "./use_cases/notifications/zod_update_user_notification.js";
import zod_delayed_notification from "./use_cases/notifications/zod_delayed_notification.js";
import zod_post_transfer_users from "./use_cases/transfers/zod_post_transfer_users.js";
class Zod {
    get_users(params) {
        return zod_get_users(params);
    }
    login(params) {
        return zod_login(params);
    }
    register(params) {
        return zod_register(params);
    }
    update_profile(params) {
        return zod_update_profile(params);
    }
    get_transfer(params) {
        return zod_get_transfer(params);
    }
    get_transfers(params) {
        return zod_get_transfers(params);
    }
    post_transfer(params) {
        return zod_post_transfer(params);
    }
    delete_transfer(params) {
        return zod_delete_transfer(params);
    }
    conclude_transfer(params) {
        return zod_conclude_transfer(params);
    }
    reactivate_transfer(params) {
        return zod_reactivate_transfer(params);
    }
    update_transfer(params) {
        return zod_update_transfer(params);
    }
    get_transfer_users(params) {
        return zod_get_transfer_users(params);
    }
    post_transfer_users(params) {
        return zod_post_transfer_users(params);
    }
    get_observation(params) {
        return zod_get_observation(params);
    }
    get_observations(params) {
        return zod_get_observations(params);
    }
    post_observation(params) {
        return zod_post_observation(params);
    }
    delete_observation(params) {
        return zod_delete_observation(params);
    }
    conclude_observation(params) {
        return zod_conclude_observation(params);
    }
    reactivate_observation(params) {
        return zod_reactivate_observation(params);
    }
    update_observation(params) {
        return zod_update_observation(params);
    }
    post_user_notifications(params) {
        return zod_post_user_notifications(params);
    }
    post_notifications(params) {
        return zod_post_notifications(params);
    }
    delete_user_notification(params) {
        return zod_delete_user_notification(params);
    }
    update_user_notification(params) {
        return zod_update_user_notification(params);
    }
    delayed_notification(params) {
        return zod_delayed_notification(params);
    }
}
export default Zod;
