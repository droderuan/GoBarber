import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(request, response) {
    /**
     * Check if provider is a provider
     */
    const checkIsProvider = await User.findOne({
      where: { id: request.userId, provider: true },
    });

    if (!checkIsProvider) {
      return response
        .status(401)
        .json({ error: 'Only providers can loade notifications' });
    }

    const notifications = await Notification.find({
      user: request.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return response.json(notifications);
  }

  async update(request, response) {
    // const notification = await Notification.findById(request.params.id);
    const notification = await Notification.findByIdAndUpdate(
      request.params.id,
      { read: true },
      // Return the updated register from DB
      { new: true }
    );

    return response.json(notification);
  }
}

export default new NotificationController();
