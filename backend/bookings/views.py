import datetime
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .db_connection import bookings_collection

@api_view(['POST'])
def create_booking(request):
    try:
        data = request.data
        
        # Check required fields
        required_fields = ['email', 'name', 'phone', 'partySize', 'date', 'day', 'time', 'bookingRef', 'location']
        missing_fields = [f for f in required_fields if f not in data]
        if missing_fields:
            return Response(
                {"error": f"Missing required fields: {', '.join(missing_fields)}"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        # Structure the MongoDB document
        document = {
            "booking_ref": data['bookingRef'],
            "location": data['location'],
            "name": data['name'],
            "email": data['email'],
            "phone": data['phone'],
            "party_size": data['partySize'],
            "date": data['date'],
            "day": data['day'],
            "time": data['time'],
            "special_requests": data.get('specialRequests', ''),
            "created_at": datetime.datetime.utcnow().isoformat()
        }
        
        # Insert into MongoDB collection
        result = bookings_collection.insert_one(document)
        
        print("\n=======================================================")
        print("[ Django DB Persistence Success ]")
        print("-------------------------------------------------------")
        print(f"Stored booking: {data['bookingRef']}")
        print(f"Details: {data['partySize']} guests at {data['location']} store on {data['date']}")
        print("=======================================================\n")
        
        return Response({
            "success": True,
            "message": "Booking stored successfully in MongoDB.",
            "inserted_id": str(getattr(result, 'inserted_id', 'mock-id')),
            "booking_ref": data['bookingRef']
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        print(f"Error inserting booking to MongoDB: {e}")
        return Response(
            {"error": f"Failed to store booking: {str(e)}"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
