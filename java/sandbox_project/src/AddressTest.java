import junit.framework.TestCase;

public class AddressTest extends TestCase {
	
	public void testBuilderDefaults() {
		Address expected = new Address.Builder("Chicago", "IL").build();
		assertEquals("State is IL", "IL", expected.getState());
		assertEquals("City is Chicago", "Chicago", expected.getCity());
	}
	
	public void testBuilderStreetStateZip() {
		Address expected = new Address.Builder("Chicago", "IL").street("this is an address").zip("11111").build();
		assertEquals("Address is this is an address", "this is an address", expected.getStreet());
		assertEquals("Zip is 11111", "11111", expected.getZip());
		assertEquals("State is IL", "IL", expected.getState());
		assertEquals("City is Chicago", "Chicago", expected.getCity());
	}

	// Try a different order
	public void testBuilderZipStreetState() {
		Address expected = new Address.Builder("Chicago", "IL").zip("11111").street("this is an address").build();
		assertEquals("Address is this is an address", "this is an address", expected.getStreet());
		assertEquals("Zip is 11111", "11111", expected.getZip());
		assertEquals("State is IL", "IL", expected.getState());
		assertEquals("City is Chicago", "Chicago", expected.getCity());	
	}

}
