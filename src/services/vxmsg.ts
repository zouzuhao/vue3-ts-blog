/**
 * @author: zzh
 * @description: 可视化报表服务
 */
import { ApiService } from "@/services/index";
import { PlainResponse, QueryWxMsgType, QueryWeekMsgType } from "@/bean/xhr";

class WxMessageService extends ApiService {
    public bothMsg() {
        return this.$get<PlainResponse<string>>("bothmsg");
    }
    public weekMsg() {
        return this.$get<PlainResponse<string>>("weekmsg");
    }
    public typeMsg(params: QueryWxMsgType) {
        return this.$get<PlainResponse<string>>("typemsg", params);
    }
    public monthMsg(params: QueryWeekMsgType) {
        return this.$get<PlainResponse<string>>("monthmsg", params);
    }
}

export const wxMessageService = new WxMessageService("msg");
