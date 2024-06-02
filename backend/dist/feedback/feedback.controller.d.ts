import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(createFeedbackDto: CreateFeedbackDto): Promise<import("./entities/feedback.entity").Feedback>;
    findAll(): Promise<import("./entities/feedback.entity").Feedback[]>;
    findOne(id: string): Promise<import("./entities/feedback.entity").Feedback>;
}
