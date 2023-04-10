from rest_framework.serializers import ModelSerializer

from rooms.serializers import RoomListSerializer
from wishlists.models import Wishlist


class WishlistSerializer(ModelSerializer):
    class Meta:
        model = Wishlist
        fields = (
            "name",
            "rooms",
        )

    rooms = RoomListSerializer(
        read_only=True,
        many=True,
    )
