import { EventPattern, Payload } from "@nestjs/microservices";
import { Controller } from "@nestjs/common";
import { RedisMessage } from "./redisMessage";

@Controller("redis-controller")
export class RedisController {
  @EventPattern("topic.sample.v1")
  async onTopicSampleV1(
    @Payload()
    message: RedisMessage
  ): Promise<void> {}
}
